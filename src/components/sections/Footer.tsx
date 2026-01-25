export default function Footer() {
  return (
    <footer>
      <form action="">
        <h3>If you have offers, let me know (send an email)</h3>
        <input type="email" />
        <textarea name="message" id=""></textarea>
        <button type="submit">Send</button>
      </form>
      <p>
        © {new Date().getFullYear()} Ventsislav Venkov. All rights reserved.
      </p>
    </footer>
  );
}
