import { NextRequest, NextResponse } from 'next/server';

const SERVER_BASE_URL = 'http://46.62.165.97:1337';

export async function GET(request, { params }) {
  try {
    const { path } = params;
    
    // Reconstruct the full path from the catch-all route
    const imagePath = Array.isArray(path) ? path.join('/') : path;
    
    // Validate the path to prevent directory traversal attacks
    if (imagePath.includes('..') || imagePath.includes('//')) {
      return new NextResponse('Invalid path', { status: 400 });
    }
    
    // Construct the full URL to the server
    const serverUrl = `${SERVER_BASE_URL}/${imagePath}`;
    
    // Fetch the image from the server
    const response = await fetch(serverUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Kandak-News-Image-Proxy/1.0',
      },
    });
    
    if (!response.ok) {
      return new NextResponse('Image not found', { status: response.status });
    }
    
    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    
    // Get content type from the original response
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
      },
    });
    
  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
