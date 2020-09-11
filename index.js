function handleClick() {
  const encoder = new TextEncoder();
  const str = "ようこそ世界!\n";
  const view = encoder.encode(str);
  const blob = new Blob(view);
  const url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.download = "test.txt";
  a.href = url;
  a.click();

  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 100);
}
