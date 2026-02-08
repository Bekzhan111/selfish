import React, { useState } from 'react'
import './ProductGallery.css'

// All images are now in public/images folder
// Files in public folder are served at root path, so we reference them as /images/filename
const imageFilenames = [
  'IMG_0024.JPG.jpeg',
  'IMG_0362.jpg',
  'IMG_0375.jpg',
  'IMG_0378.jpg',
  'IMG_0381.jpg',
  'IMG_0390.jpg',
  'IMG_0399.jpg',
  'IMG_0401.jpg',
  'IMG_1228.jpg',
  'IMG_1317.jpg',
  'IMG_1319.jpg',
  'IMG_1324.jpg',
  'IMG_2227.JPG.jpeg',
  'IMG_2228.JPG.jpeg',
  'IMG_2231.JPG.jpeg',
  'IMG_2784.JPG.jpeg',
  'IMG_2924.jpg',
  'IMG_2964.jpg',
  'IMG_2966.jpg',
  'IMG_3684.jpg',
  'IMG_3764.jpg',
  'IMG_3770.jpg',
  'IMG_3832.jpg',
  'IMG_5038.jpg',
  'IMG_5059.jpg',
  'IMG_5246.jpg',
  'IMG_5771.jpg',
  'IMG_5780.jpg',
  'IMG_5812.jpg',
  'IMG_5818.jpg',
  'IMG_7773.JPG.jpeg',
  'IMG_7873.jpg',
  'IMG_8096.jpg',
  'IMG_8196.jpg',
  'IMG_8205.jpg',
  'IMG_8659.jpg',
  'IMG_8660.jpg',
  'IMG_8661.jpg',
  'IMG_8664.jpg',
  'IMG_8665.jpg',
  'IMG_8897.JPG.jpeg',
  'IMG_8898.JPG.jpeg',
  'IMG_8905.JPG.jpeg',
  'IMG_8907.JPG.jpeg',
  'IMG_8919.JPG.jpeg',
  'IMG_8924.JPG.jpeg',
  'IMG_8925.JPG.jpeg',
]

// Helper function to get optimized filename (for gallery thumbnails)
const getOptimizedFilename = (filename) => {
  const base = filename.replace(/\.(jpeg|JPEG)$/, '')
  return `${base}.jpg`
}

// Create original image paths for gallery (use originals to ensure they load)
const galleryImages = imageFilenames.map(filename => `/images/${filename}`)

// Use original images for modal too (to ensure all images load correctly)
// Note: .jpeg files are small (165KB), .jpg files are large (4-5MB) but will work
const modalImages = imageFilenames.map(filename => `/images/${filename}`)

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(modalImages[index])}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              loading="lazy"
              className="gallery-image"
              decoding="async"
              onError={(e) => {
                console.error('Failed to load gallery image:', image);
                // Try optimized version as fallback
                const optimizedPath = image.replace('/images/', '/images/optimized/').replace(/\.(jpeg|JPEG)$/, '.jpg');
                console.log('Trying optimized fallback:', optimizedPath);
                e.target.src = optimizedPath;
              }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage}
              alt="Product"
              className="modal-image"
              loading="eager"
              onError={(e) => {
                console.error('Failed to load modal image:', selectedImage);
                // Try optimized version as fallback
                const optimizedPath = selectedImage.replace('/images/', '/images/optimized/').replace(/\.(jpeg|JPEG)$/, '.jpg');
                console.log('Trying optimized fallback:', optimizedPath);
                e.target.src = optimizedPath;
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductGallery
