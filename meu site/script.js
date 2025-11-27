<!-- rodapé -->
<span id="year"></span>

<!-- botão de favoritar (coloque data-product-id se quiser salvar) -->
<button onclick="addFav(this)" data-product-id="base-glow">Favoritar</button>

<!-- form -->
<form onsubmit="sendContact(event)">
  <input id="name" required />
  <input id="email" required />
  <textarea id="message" required></textarea>
  <button type="submit">Enviar</button>
</form>