import bookmarks from "../src/datas/Bookmarks.json";

/**
 * level = 1 → h1
 * level = 2 → h2
 * level = 3 → h3
 */
function renderBookmarks(list, level = 1) {
  return list.map((item, index) => {
    const Tag =
      level === 1 ? "h1" :
      level === 2 ? "h2" : "h3";

    return (
      <div key={index}>
        <Tag
          id={item["data-target-id"]}
          style={{
            fontSize: "1px",
            opacity: 0,
            margin: 0,
          }}
        >
          {item.title}
        </Tag>

        {item.children &&
          renderBookmarks(item.children, level + 1)}
      </div>
    );
  });
}

export default function BookmarkRenderer() {
  return (
    <div aria-hidden="true">
      {renderBookmarks(bookmarks)}
    </div>
  );
}
