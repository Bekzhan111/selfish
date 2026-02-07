#!/bin/bash

# Script to optimize images for web
# Creates optimized versions in public/images/optimized/

echo "Optimizing images for web..."

cd public/images

# Counter
optimized=0

# Process all JPEG files
for file in *.jpg *.jpeg *.JPG *.JPEG; do
    if [ -f "$file" ]; then
        filename="${file%.*}"
        output="optimized/${filename}.jpg"
        
        echo "Optimizing: $file"
        
        # Resize to max 1200px width (good for web, maintains aspect ratio)
        # Compress with quality 85 (good balance between size and quality)
        sips -Z 1200 -s format jpeg -s formatOptions 85 "$file" --out "$output" > /dev/null 2>&1
        
        if [ $? -eq 0 ]; then
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
            optimized_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
            reduction=$((100 - (optimized_size * 100 / original_size)))
            echo "✓ Optimized: $output (${reduction}% smaller)"
            ((optimized++))
        else
            echo "✗ Failed: $file"
        fi
    fi
done

echo ""
echo "Optimization complete! Optimized $optimized images."
echo "Optimized images are in public/images/optimized/"
