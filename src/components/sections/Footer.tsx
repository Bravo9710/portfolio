export default function Footer() {
  return (
    <footer className="bg-border mx-auto py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-center">Let&apos;s work together</h3>
        <p className="pb-4 text-center text-sm">
          Have a offer or project in mind? Do not hesitate to reach out.
        </p>

        {/* <form action="">
          <input type="email" />
          <textarea name="message" id=""></textarea>
          <button type="submit">Send</button>
        </form> */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Ventsislav Venkov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
