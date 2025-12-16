import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportOptions {
  fileName?: string;
  isPremium?: boolean;
}

export const exportToPDF = async (
  elementId: string,
  options: ExportOptions = {}
): Promise<void> => {
  const { fileName = 'marriage-biodata', isPremium = false } = options;
  
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  // Store original styles
  const originalTransform = element.style.transform;
  const originalTransformOrigin = element.style.transformOrigin;
  
  // Reset transform for accurate capture
  element.style.transform = 'none';
  element.style.transformOrigin = 'top left';

  try {
    // Create high-quality canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      imageTimeout: 15000,
      onclone: (clonedDoc) => {
        // Ensure all images are loaded in clone
        const images = clonedDoc.querySelectorAll('img');
        images.forEach(img => {
          img.crossOrigin = 'anonymous';
        });
      }
    });

    // Calculate PDF dimensions (A4 size in mm)
    const pdfWidth = 210;
    const pdfHeight = 297;
    
    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Add image to PDF (fills entire page)
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Add watermark text on the image itself (not as selectable text)
    // This is already handled in the template via the Watermark component

    // Set PDF properties to prevent editing
    // Note: These are metadata properties, actual protection requires encryption
    // which is not available in jsPDF basic version
    
    // Save the PDF
    const timestamp = new Date().toISOString().slice(0, 10);
    pdf.save(`${fileName}-${timestamp}.pdf`);

  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  } finally {
    // Restore original styles
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
  }
};

// Export as high-quality image
export const exportAsImage = async (
  elementId: string,
  options: ExportOptions = {}
): Promise<void> => {
  const { fileName = 'marriage-biodata' } = options;
  
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  const originalTransform = element.style.transform;
  const originalTransformOrigin = element.style.transformOrigin;
  
  element.style.transform = 'none';
  element.style.transformOrigin = 'top left';

  try {
    const canvas = await html2canvas(element, {
      scale: 3, // Very high resolution for image
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    // Create download link
    const link = document.createElement('a');
    link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();

  } finally {
    element.style.transform = originalTransform;
    element.style.transformOrigin = originalTransformOrigin;
  }
};
