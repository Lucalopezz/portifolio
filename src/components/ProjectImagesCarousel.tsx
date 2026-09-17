import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectImage = NonNullable<Project['images']>[number]

export function ProjectImagesCarousel({
  projectName,
  images,
}: {
  projectName: string
  images: ProjectImage[]
}) {
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)
  const hasMultipleImages = images.length > 1

  function move(direction: number) {
    setActive(
      (current) => (current + direction + images.length) % images.length,
    )
  }

  return (
    <div
      className="min-w-0 border-t border-line bg-tint p-4 sm:p-6 lg:border-t-0 lg:border-l"
      role={hasMultipleImages ? 'region' : undefined}
      aria-roledescription={hasMultipleImages ? 'carrossel' : undefined}
      aria-label={`Telas de ${projectName}`}
    >
      <div
        className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX
        }}
        onTouchCancel={() => {
          touchStart.current = null
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null || !hasMultipleImages) return
          const distance = event.changedTouches[0].clientX - touchStart.current
          if (Math.abs(distance) > 60) move(distance < 0 ? 1 : -1)
          touchStart.current = null
        }}
      >
        <div
          className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((image, index) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noreferrer"
              tabIndex={index === active ? 0 : -1}
              aria-hidden={index !== active}
              aria-label={`Ampliar ${projectName}: ${image.label}`}
              className="block w-full shrink-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[19/10] w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 flex min-w-0 items-center justify-between gap-3">
        <p
          className="min-w-0 text-xs text-muted"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="block truncate">
            {projectName} · {images[active].label}
          </span>
          {hasMultipleImages && (
            <span className="mt-1 block font-mono">
              {active + 1} / {images.length}
            </span>
          )}
        </p>
        {hasMultipleImages ? (
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label={`Imagem anterior de ${projectName}`}
              onClick={() => move(-1)}
              className="flex size-11 items-center justify-center rounded-lg border border-line bg-surface hover:bg-page"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Próxima imagem de ${projectName}`}
              onClick={() => move(1)}
              className="flex size-11 items-center justify-center rounded-lg border border-line bg-surface hover:bg-page"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        ) : (
          <span aria-hidden="true" className="shrink-0 text-xs text-muted">
            Ampliar ↗
          </span>
        )}
      </div>
    </div>
  )
}
