import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const heroContent = await prisma.heroContent.findFirst({
      include: {
        techStack: true,
        skills: true,
        stats: true,
      },
    })
    
    if (!heroContent) {
      return NextResponse.json(
        { error: 'Hero content not found' }, 
        { status: 404 }
      )
    }
    
    return NextResponse.json(heroContent)
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return NextResponse.json(
      { error: 'Error fetching hero content' }, 
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.roles || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const heroContent = await prisma.heroContent.create({
      data: {
        name: body.name,
        roles: body.roles,
        description: body.description,
        techStack: {
          create: body.techStack?.map((tech: string) => ({
            name: tech,
          })) || [],
        },
        skills: {
          create: body.skills || [],
        },
        stats: {
          create: body.stats || [],
        },
      },
      include: {
        techStack: true,
        skills: true,
        stats: true,
      },
    })

    return NextResponse.json(heroContent)
  } catch (error) {
    console.error('Error creating hero content:', error)
    return NextResponse.json(
      { error: 'Error creating hero content' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.id) {
      return NextResponse.json(
        { error: 'Missing content ID' },
        { status: 400 }
      )
    }

    // Check if content exists
    const existing = await prisma.heroContent.findUnique({
      where: { id: body.id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      )
    }

    // Build update data based on what's provided
    const updateData: any = {}
    
    if (body.name) updateData.name = body.name
    if (body.roles) updateData.roles = body.roles
    if (body.description) updateData.description = body.description

    // Handle related records updates
    if (body.techStack) {
      updateData.techStack = {
        deleteMany: {},
        create: body.techStack.map((tech: string) => ({
          name: tech,
        })),
      }
    }

    if (body.skills) {
      updateData.skills = {
        deleteMany: {},
        create: body.skills,
      }
    }

    if (body.stats) {
      updateData.stats = {
        deleteMany: {},
        create: body.stats,
      }
    }

    const updated = await prisma.heroContent.update({
      where: { id: body.id },
      data: updateData,
      include: {
        techStack: true,
        skills: true,
        stats: true,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating hero content:', error)
    return NextResponse.json(
      { error: 'Error updating hero content' },
      { status: 500 }
    )
  }
}

// Optional: Add DELETE method
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing content ID' },
        { status: 400 }
      )
    }

    await prisma.heroContent.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Content deleted successfully' })
  } catch (error) {
    console.error('Error deleting hero content:', error)
    return NextResponse.json(
      { error: 'Error deleting hero content' },
      { status: 500 }
    )
  }
}