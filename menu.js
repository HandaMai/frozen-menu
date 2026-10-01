/* =========================================
   設定
========================================= */

/*
  1ページに表示するメニュー数
*/

const ITEMS_PER_PAGE = 15;


/* =========================================
   HTML要素
========================================= */

const menuList =
  document.getElementById("menuList");

const pagination =
  document.getElementById("pagination");

const selectedList =
  document.getElementById("selectedList");

const copyButton =
  document.getElementById("copyButton");

const totalCount =
  document.getElementById("totalCount");

const lastDelivery =
  document.getElementById("lastDelivery");

const siteUpdated =
  document.getElementById("siteUpdated");


/* =========================================
   サイト情報を表示
========================================= */

lastDelivery.textContent =
  siteInfo.lastDelivery;

siteUpdated.textContent =
  siteInfo.updated;


/* =========================================
   選択中のメニュー
========================================= */

let selectedMenus = [];


/*
  例：

  {
    id: "buta-kakuni",
    quantity: 2,
    memo: "しょうが多め"
  }
*/


/* =========================================
   フィルター
========================================= */

let filters = {

  genre: "all",

  category: "all",

  taste: "all"

};


/* =========================================
   現在のページ
========================================= */

let currentPage = 1;


/* =========================================
   選択中のメニューを探す
========================================= */

function getSelectedMenu(id) {

  return selectedMenus.find(
    item => item.id === id
  );

}


/* =========================================
   フィルター後のメニューを取得
========================================= */

function getFilteredMenus() {

  return menus.filter(menu => {

    const genreOK =
      filters.genre === "all" ||
      menu.genre === filters.genre;


    const categoryOK =
      filters.category === "all" ||
      menu.category === filters.category;


    const tasteOK =
      filters.taste === "all" ||
      menu.taste === filters.taste;


    return (
      genreOK &&
      categoryOK &&
      tasteOK
    );

  });

}


/* =========================================
   メニューを表示
========================================= */

function renderMenus() {

  menuList.innerHTML = "";


  /*
    フィルター後のメニュー
  */

  const filteredMenus =
    getFilteredMenus();


  /*
    ページ数を計算
  */

  const totalPages =
    Math.ceil(
      filteredMenus.length /
      ITEMS_PER_PAGE
    );


  /*
    現在のページが存在しなくなった場合
  */

  if (
    totalPages > 0 &&
    currentPage > totalPages
  ) {

    currentPage = totalPages;

  }


  /*
    今のページに表示する範囲
  */

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;


  const pageMenus =
    filteredMenus.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );


  /*
    メニューがない場合
  */

  if (pageMenus.length === 0) {

    const empty =
      document.createElement("p");

    empty.className =
      "no-menus";

    empty.textContent =
      "該当するメニューがありません";

    menuList.appendChild(empty);

  }


  /*
    メニューカードを作る
  */

  pageMenus.forEach(menu => {

    const card =
      document.createElement("article");


    card.className =
      "menu-card";


    /*
      選択されているか確認
    */

    const selected =
      getSelectedMenu(menu.id);


    if (selected) {

      card.classList.add(
        "selected"
      );

    }


    /*
      カードの中身
    */

    card.innerHTML = `

      <div class="selected-mark">
        ✓
      </div>


      <div class="menu-name">
        ${escapeHtml(menu.name)}
      </div>


      <div class="menu-description">
        ${escapeHtml(menu.description)}
      </div>


      <div class="tags">

        <span class="tag">
          ${escapeHtml(menu.genre)}
        </span>

        <span class="tag">
          ${escapeHtml(menu.category)}
        </span>

        <span class="tag">
          ${escapeHtml(menu.taste)}
        </span>

      </div>


      ${
        selected
          ? `

            <div class="selection-options">

              <!-- 個数 -->

              <div class="quantity-row">

                <span class="quantity-label">
                  個数
                </span>


                <div class="quantity-control">

                  <button
                    type="button"
                    class="quantity-button minus-button">
                    −
                  </button>


                  <span class="quantity-number">
                    ${selected.quantity}
                  </span>


                  <button
                    type="button"
                    class="quantity-button plus-button">
                    ＋
                  </button>

                </div>

              </div>


              <!-- メモ -->

              <label class="memo-label">
                メモ
              </label>


              <textarea
                class="memo-input"
                placeholder="希望があれば書いてね"
                rows="1">${escapeHtml(selected.memo)}</textarea>

            </div>

          `
          : ""
      }

    `;


    /* =====================================
       カードクリック
    ===================================== */

    card.addEventListener(
      "click",
      (event) => {

        /*
          個数・メモを操作した場合は
          カード自体を選択/解除しない
        */

        if (
          event.target.closest(
            ".selection-options"
          )
        ) {

          return;

        }


        /*
          すでに選択されているなら解除
        */

        if (selected) {

          selectedMenus =
            selectedMenus.filter(
              item =>
                item.id !== menu.id
            );

        }


        /*
          選択されていないなら追加
        */

        else {

          selectedMenus.push({

            id: menu.id,

            quantity: 1,

            memo: ""

          });

        }


        renderMenus();

        renderSelectedMenus();

      }
    );


    /* =====================================
       選択済みメニューの操作
    ===================================== */

    if (selected) {

      const minusButton =
        card.querySelector(
          ".minus-button"
        );


      const plusButton =
        card.querySelector(
          ".plus-button"
        );


      const memoInput =
        card.querySelector(
          ".memo-input"
        );


      /* ---------------------------------
         個数を減らす
      --------------------------------- */

      minusButton.addEventListener(
        "click",
        (event) => {

          event.stopPropagation();


          if (
            selected.quantity > 1
          ) {

            selected.quantity--;

          }


          renderMenus();

          renderSelectedMenus();

        }
      );


      /* ---------------------------------
         個数を増やす
      --------------------------------- */

      plusButton.addEventListener(
        "click",
        (event) => {

          event.stopPropagation();


          selected.quantity++;


          renderMenus();

          renderSelectedMenus();

        }
      );


      /* ---------------------------------
         メモ
      --------------------------------- */

      memoInput.addEventListener(
        "input",
        (event) => {

          selected.memo =
            event.target.value;


          renderSelectedMenus();

        }
      );


      memoInput.addEventListener(
        "click",
        (event) => {

          event.stopPropagation();

        }
      );

    }


    menuList.appendChild(card);

  });


  /*
    ページャーを更新
  */

  renderPagination(
    totalPages
  );

}


/* =========================================
   ページネーション
========================================= */

function renderPagination(totalPages) {

  pagination.innerHTML = "";


  /*
    1ページしかない場合は
    ページャーを表示しない
  */

  if (totalPages <= 1) {

    return;

  }


  /*
    前へ
  */

  const prevButton =
    document.createElement("button");


  prevButton.className =
    "page-button";


  prevButton.textContent =
    "‹";


  prevButton.disabled =
    currentPage === 1;


  prevButton.addEventListener(
    "click",
    () => {

      if (currentPage > 1) {

        currentPage--;

        renderMenus();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }

    }
  );


  pagination.appendChild(
    prevButton
  );


  /*
    ページ番号
  */

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    const pageButton =
      document.createElement("button");


    pageButton.className =
      "page-button";


    pageButton.textContent =
      page;


    if (
      page === currentPage
    ) {

      pageButton.classList.add(
        "active"
      );

    }


    pageButton.addEventListener(
      "click",
      () => {

        currentPage =
          page;

        renderMenus();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );


    pagination.appendChild(
      pageButton
    );

  }


  /*
    次へ
  */

  const nextButton =
    document.createElement("button");


  nextButton.className =
    "page-button";


  nextButton.textContent =
    "›";


  nextButton.disabled =
    currentPage === totalPages;


  nextButton.addEventListener(
    "click",
    () => {

      if (
        currentPage < totalPages
      ) {

        currentPage++;

        renderMenus();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }

    }
  );


  pagination.appendChild(
    nextButton
  );

}


/* =========================================
   選択結果を表示
========================================= */

function renderSelectedMenus() {

  selectedList.innerHTML = "";


  /*
    何も選択されていない
  */

  if (
    selectedMenus.length === 0
  ) {

    const empty =
      document.createElement("li");


    empty.className =
      "empty";


    empty.textContent =
      "まだ選択されていません";


    selectedList.appendChild(
      empty
    );


    totalCount.textContent =
      "0";


    return;

  }


  let total = 0;


  selectedMenus.forEach(item => {

    const menu =
      menus.find(
        menu =>
          menu.id === item.id
      );


    if (!menu) {

      return;

    }


    total +=
      item.quantity;


    const li =
      document.createElement("li");


    li.className =
      "selected-item";


    li.innerHTML = `

      <div class="selected-item-info">

        <span class="selected-item-name">
          ❏ ${escapeHtml(menu.name)}
        </span>

        ${
          item.memo.trim()
            ? `
              <span class="selected-item-memo">
                メモ：${escapeHtml(
                  item.memo.trim()
                )}
              </span>
            `
            : ""
        }

      </div>


      <div class="selected-item-actions">

        <div class="selected-quantity-control">

          <button
            type="button"
            class="selected-quantity-button selected-minus"
            aria-label="${escapeHtml(menu.name)}の個数を減らす">
            −
          </button>


          <span class="selected-quantity-number">
            ${item.quantity}
          </span>


          <button
            type="button"
            class="selected-quantity-button selected-plus"
            aria-label="${escapeHtml(menu.name)}の個数を増やす">
            ＋
          </button>

        </div>


        <button
          type="button"
          class="selected-delete-button"
          aria-label="${escapeHtml(menu.name)}を選択から削除"
          title="選択から削除">
          ×
        </button>

      </div>

    `;


    /* ---------------------------------
       個数を減らす
    --------------------------------- */

    li.querySelector(
      ".selected-minus"
    ).addEventListener(
      "click",
      () => {

        if (
          item.quantity > 1
        ) {

          item.quantity--;

        } else {

          selectedMenus =
            selectedMenus.filter(
              selected =>
                selected.id !== item.id
            );

        }


        renderMenus();

        renderSelectedMenus();

      }
    );


    /* ---------------------------------
       個数を増やす
    --------------------------------- */

    li.querySelector(
      ".selected-plus"
    ).addEventListener(
      "click",
      () => {

        item.quantity++;


        renderMenus();

        renderSelectedMenus();

      }
    );


    /* ---------------------------------
       削除
    --------------------------------- */

    li.querySelector(
      ".selected-delete-button"
    ).addEventListener(
      "click",
      () => {

        selectedMenus =
          selectedMenus.filter(
            selected =>
              selected.id !== item.id
          );


        renderMenus();

        renderSelectedMenus();

      }
    );


    selectedList.appendChild(li);

  });


  totalCount.textContent =
    total;

}


/* =========================================
   コピー
========================================= */

copyButton.addEventListener(
  "click",
  async () => {

    /*
      選択なし
    */

    if (
      selectedMenus.length === 0
    ) {

      alert(
        "まずメニューを選んでね！"
      );

      return;

    }


    let total = 0;


    const lines = [

      "次回食べたいもの",

      ""

    ];


    selectedMenus.forEach(item => {

      const menu =
        menus.find(
          menu =>
            menu.id === item.id
        );


      if (!menu) {

        return;

      }


      total +=
        item.quantity;


      lines.push(
        `❏ ${menu.name} × ${item.quantity}`
      );


      if (
        item.memo.trim()
      ) {

        lines.push(
          `　メモ：${item.memo.trim()}`
        );

      }

    });


    lines.push("");


    lines.push(
      `合計 ${total}個`
    );


    const text =
      lines.join("\n");


    try {

      await navigator.clipboard
        .writeText(text);


      copyButton.textContent =
        "コピーしました ✓";


      setTimeout(() => {

        copyButton.textContent =
          "選んだメニューをコピー";

      }, 2000);

    }

    catch (error) {

      alert(
        "コピーできませんでした。"
      );

    }

  }
);


/* =========================================
   フィルター
========================================= */

document
  .querySelectorAll(
    ".filter-button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const type =
          button.dataset.filterType;


        const value =
          button.dataset.value;


        /*
          フィルターを変更
        */

        filters[type] =
          value;


        /*
          1ページ目に戻す
        */

        currentPage = 1;


        /*
          同じ種類のボタンだけ
          activeを切り替える
        */

        document
          .querySelectorAll(
            `.filter-button[data-filter-type="${type}"]`
          )
          .forEach(btn => {

            btn.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        renderMenus();

      }
    );

  });


/* =========================================
   HTML特殊文字を安全に表示する
========================================= */

function escapeHtml(value) {

  return String(value)

    .replaceAll("&", "&amp;")

    .replaceAll("<", "&lt;")

    .replaceAll(">", "&gt;")

    .replaceAll('"', "&quot;")

    .replaceAll("'", "&#039;");

}


/* =========================================
   初期表示
========================================= */

renderMenus();

renderSelectedMenus();