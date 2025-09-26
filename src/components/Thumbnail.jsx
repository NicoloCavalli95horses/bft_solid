import { Show } from "solid-js";
import "./Thumbnail.css";

function ImageItem(props) {
  const { item } = props;

  function handleClick(item) {
    alert(item.is_premium ? 'premium' : 'free');
  }

  return (
    <div class="img-wrapper" onClick={() => handleClick(item)}>
      <img src={item.src} alt={item.alt || "img"} />
      <Show when={item.is_premium}>
        <div class="badge">🔒</div>
      </Show>
    </div>
  );
}

export default ImageItem;