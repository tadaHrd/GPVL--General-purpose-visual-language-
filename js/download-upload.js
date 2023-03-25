function download(text) {
  const blob = new Blob([text], {type: 'text/json'});
  const url = URL.createObjectURL(blob);

  return url;
}

document.getElementById("saveFile").addEventListener("click", e => {
  e.target.href = download(
    JSON.stringify(
      Blockly.serialization.workspaces.save(workspace)
    )
  )
});

document.getElementById("loadFile").addEventListener('change', () => {
  const file = document.getElementById("loadFile").files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    upload(JSON.parse(event.target.result));
  };
  reader.readAsText(file);
});
