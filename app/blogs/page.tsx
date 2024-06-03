import Link from 'next/link';

const Blogs = () => {
  const blogs = [
    { title: "Is it Worth Being Wise?", href: "/is-it-worth-being-wise" },
    // Add other blogs as needed
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="max-w-4xl mx-auto w-full mt-10">
        <h1 className="text-2xl font-bold text-gray-800 my-4">Blogs</h1>
        <ul className="list-disc pl-5">
          {blogs.map(blog => (
            <li key={blog.title} className="my-4">
              <Link href={blog.href}>
                <p className="text-blue-500 hover:text-blue-700 text-base underline">{blog.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Blogs;