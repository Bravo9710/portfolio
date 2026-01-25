export default function Footer() {
  return (
    <footer className="bg-border mx-auto">
      <div className="container mx-auto">
        <h3 className="text-center">Let&apos;s work together</h3>
        <p className="text-center">
          Have a offer or project in mind? Do not hesitate to reach out.
        </p>

        <form action="">
          <input type="email" />
          <textarea name="message" id=""></textarea>
          <button type="submit">Send</button>
        </form>
        <p>
          © {new Date().getFullYear()} Ventsislav Venkov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
