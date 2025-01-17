import { useCallback, useRef, useState, useEffect } from 'react';
import * as PDFJS from 'pdfjs-dist';
import type { PDFDocumentProxy, RenderParameters } from 'pdfjs-dist/types/src/display/api';
import { useParams } from 'react-router';
import SEO from '@/components/common/SEO';

const PdfView = () => {
  const { fileName } = useParams();
  const src = `/${fileName}`;

  PDFJS.GlobalWorkerOptions.workerSrc =
    'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<PDFJS.RenderTask | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const renderPage = useCallback(
    (pageNum: number, pdf = pdfDoc) => {
      const canvas = canvasRef.current;
      if (!canvas || !pdf) return;

      setIsLoading(true);
      canvas.height = 0;
      canvas.width = 0;
      pdf
        .getPage(pageNum)
        .then((page) => {
          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext: RenderParameters = {
            canvasContext: canvas.getContext('2d')!,
            viewport: viewport,
          };
          try {
            if (renderTaskRef.current) {
              renderTaskRef.current.cancel();
            }
            renderTaskRef.current = page.render(renderContext);
            return renderTaskRef.current.promise;
          } catch (error) {
            console.error(error);
            setError('Помилка при відображенні сторінки');
          } finally {
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setError('Помилка при завантаженні сторінки');
          setIsLoading(false);
        });
    },
    [pdfDoc],
  );

  useEffect(() => {
    renderPage(currentPage, pdfDoc);
  }, [pdfDoc, currentPage, renderPage]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const loadingTask = PDFJS.getDocument(src);
    loadingTask.promise.then(
      (loadedDoc) => {
        setPdfDoc(loadedDoc);
        setIsLoading(false);
      },
      (error) => {
        console.error(error);
        setError('Помилка при завантаженні документу');
        setIsLoading(false);
      },
    );

    return () => {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [src]);

  const nextPage = () => pdfDoc && currentPage < pdfDoc.numPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  if (error) {
    return (
      <>
        <SEO
          title='Помилка перегляду документа'
          description='Виникла помилка при спробі відкрити документ. Будь ласка, спробуйте пізніше.'
          type='website'
          noindex={true}
          language='uk'
        />
        <div className='flex min-h-screen items-center justify-center bg-gray-50'>
          <div className='p-4 text-center'>
            <p className='mb-2 text-red-600' role='alert'>
              {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className='text-black underline hover:no-underline'
            >
              Спробувати ще раз
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Документ - ${fileName?.replace('.pdf', '')}`}
        description='Перегляд документа у форматі PDF'
        url={`/documents/${fileName}`}
        type='article'
        modifiedTime={new Date().toISOString()}
        keywords={['документ', 'PDF документ', 'перегляд документа', 'Baza Frontline документи']}
        language='uk'
      />
      <div className='min-h-screen bg-gray-50 p-2 sm:p-4' role='main'>
        <div className='mx-auto max-w-[98vw] sm:max-w-[90vw]'>
          <div className='mb-3 flex flex-col items-center justify-between space-y-2 rounded-lg bg-white p-2 shadow-sm sm:mb-4 sm:flex-row sm:space-y-0 sm:p-3'>
            <div className='flex w-full flex-wrap justify-center gap-2 sm:w-auto sm:justify-start sm:space-x-4'>
              <button
                onClick={prevPage}
                disabled={currentPage <= 1}
                className='flex items-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:px-4'
                aria-label='Попередня сторінка'
              >
                Попередня
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage >= (pdfDoc?.numPages ?? -1)}
                className='flex items-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 sm:px-4'
                aria-label='Наступна сторінка'
              >
                Наступна
              </button>
              <span
                className='flex items-center whitespace-nowrap text-sm text-gray-600'
                aria-live='polite'
              >
                Сторінка {currentPage} з {pdfDoc?.numPages || '-'}
              </span>
            </div>
          </div>
          <div
            className='flex justify-center rounded-lg bg-white p-2 shadow-lg sm:p-4'
            aria-busy={isLoading}
          >
            {isLoading && (
              <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-75'>
                <div className='h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent'></div>
              </div>
            )}
            <canvas
              ref={canvasRef}
              className='w-full rounded border border-gray-200 md:w-[70%]'
              aria-label={`PDF сторінка ${currentPage}`}
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfView;
