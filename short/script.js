document.getElementById('downloadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('aniworldLink');
  const link = input.value.trim();
  const commandBox = document.getElementById('outputBox');
  const commandOutput = document.getElementById('ytDlpCommand');
  const errorBox = document.getElementById('error');

  // Reset
  commandBox.classList.add('hidden');
  errorBox.classList.add('hidden');
  commandOutput.textContent = '';

  // Validiere Link
  if (!link.startsWith('https://aniworld.to/anime/stream/')) {
    errorBox.textContent = "❌ Bitte gib einen gültigen AniWorld-Link ein.";
    errorBox.classList.remove('hidden');
    return;
  }

  // Erzeuge yt-dlp Befehl als Vorschlag (für Nutzer mit yt-dlp lokal)
  const command = `yt-dlp --no-check-certificate -f best "${link}"`;

  commandOutput.textContent = command;
  commandBox.classList.remove('hidden');
});
