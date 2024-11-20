import { NextRequest } from 'next/server';

export async function GET(
  _req: NextRequest,
  context: any
) {
  try {
    const { slug } = context.params;
    
    const post = {
      slug,
      title: "Sample Blog Post",
      content: "This is a sample blog post content.",
      author: "John Doe",
      date: "2024-03-20",
    };

    return Response.json(post);
  } catch (error) {
    return Response.json(
      { error: "Error fetching blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: any
) {
  try {
    const { slug } = context.params;
    const body = await request.json();

    const updatedPost = {
      slug,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return Response.json(updatedPost);
  } catch (error) {
    return Response.json(
      { error: "Error updating blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: any
) {
  try {
    const { slug } = context.params;
    
    return Response.json({
      message: `Blog post ${slug} deleted successfully`,
    });
  } catch (error) {
    return Response.json(
      { error: "Error deleting blog post" },
      { status: 500 }
    );
  }
}