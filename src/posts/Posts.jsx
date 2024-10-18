const BlogPost = () => {
    const posts = [
        {
          id: 1,
          title: 'Lesson 1: How to Move the Pieces and Deliver Checkmate',
          href: '#',
          description: 'An overview of how the pieces move and how to deliver checkmate, meaning how to win a chess game',
          category: { title: 'Beginner', href: '#' },
          author: {
            name: 'Milos Ristovic',
            role: 'Owner',
            href: '#',
            imageUrl:
              '#',
          },
        },
        // More posts...
      ]
    
    return (
      <div>
        <h1> {posts[0].title} </h1>
      </div>
    )
  }
  
  export default BlogPost