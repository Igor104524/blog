import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex">
        <main className="p-12 w-3/5">
          <div className="mb-5">
            <span className="text-gray-300">Case study</span>
            <h1 className="text-green-800 text-3xl font-bold">Liveblocks</h1>
          </div>

          <div>
            <h6 className="mt-3 font-bold">
              Describe the type of project you are using Radix on?
            </h6>
            <p className="my-3">
              The Liveblocks design system relies on Radix UI, Tailwind CSS, and
              React. It is structured in a way that enables us to use primitives
              such as colors, fonts, and shadows and a selected set of
              components on our marketing site, documentation site, and product
              dashboard.
            </p>
            <p className="my-3">
              Since everything runs on Next.js, this allows us to keep things on
              brand across different platforms, while still giving us the
              freedom to create platform-specific UI patterns. I originally
              designed and set up the system, but it’s now maintained and
              improved by the Design Engineers on our team.
            </p>
            <h6 className="mt-3 font-bold">
              In what ways has Radix helped you and your company?
            </h6>
            <p className="mt-3">
              At a previous company, I designed and built a custom menu
              component. That’s when I learned how difficult and time consuming
              it was to create something that looked and behaved like a native
              macOS menu. Menu items can be infinitely nested, screen
              real-estate has to be taken into consideration, typing needs to
              automatically select the first item that matches, and the list
              goes on…
            </p>
            <p className="my-3">
              Radix handles all that stuff incredibly well. With Radix, we’re
              able to create a high-quality custom UI that behaves like native
              elements—without spending weeks on it. Instead, we can spend that
              time on our core product. As it stands today, we use Radix for our
              Dialog, AlertDialog, Menu, ContextMenu, ScrollArea, and Tooltip.
              Marc Bouchenoire on our team also recently converted our website
              main navigation to use NavigationMenu as well to improve
              accessibility.
            </p>
            <h6 className="mt-3 font-bold">
              What are your thoughts on Radix developer experience?
            </h6>
            <p className="my-3">
              I like that we can only install the components we need into our
              code base. This made it easy for us to convert things over one
              component at a time. But what I really like most is that
              components come completely unstyled which enables us to compose
              things the way we want, and even use Tailwind CSS to style things.
            </p>
            <h6 className="mt-3 font-bold">
              What are your thoughts on Radix docs?
            </h6>
            <p className="my-3">
              The documentation is great. The examples make it very easy to
              understand how things work. I also looked at Modulz design system
              to see how you were using Radix on your side and definitely took a
              lot of inspiration from that.
            </p>
          </div>
        </main>
        <aside className="w-2/5 p-10">
          <h6 className="mt-3 font-bold">
            What are your thoughts on Radix docs?
          </h6>
          <p className="my-3">
            The documentation is great. The examples make it very easy to
            understand how things work. I also looked at Modulz design system to
            see how you were using Radix on your side and definitely took a lot
            of inspiration from that.
          </p>
          <h6 className="mt-3 font-bold">
            What are your thoughts on Radix docs?
          </h6>
          <p className="my-3">
            The documentation is great. The examples make it very easy to
            understand how things work. I also looked at Modulz design system to
            see how you were using Radix on your side and definitely took a lot
            of inspiration from that.
          </p>
          <h6 className="mt-3 font-bold">
            What are your thoughts on Radix docs?
          </h6>
          <p className="my-3">
            The documentation is great. The examples make it very easy to
            understand how things work. I also looked at Modulz design system to
            see how you were using Radix on your side and definitely took a lot
            of inspiration from that.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
