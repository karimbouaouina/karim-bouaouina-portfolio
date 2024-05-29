import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function Gallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      showHideAnimationType: "zoom",
      showAnimationDuration: 150,
      hideAnimationDuration: 150,
      initialZoomLevel: "fit",
      maxZoomLevel: 2,
      mainClass: "pswp--custom-bg",
      bgOpacity: 0.3,
      arrowPrevSVG:
        '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 40 125" width="40" height="125"><path d="M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>',
      arrowNextSVG:
        '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 40 125" width="40" height="125"><path d="M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>',
      closeSVG: '<img src="/close.svg" alt="" width="15" />',
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery group-hover:grayscale-0 grayscale group-hover:contrast-100 group-hover:brightness-100 contrast-[1] brightness-90 transition-all"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          key={props.galleryID + "-" + index}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}
