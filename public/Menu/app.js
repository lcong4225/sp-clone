const menu = [{
        id: 1,
        title: "バターミルクパンケーキ",
        category: "モーニング",
        price: 1700,
        img: "./images/item-1.jpeg",
        desc: `私は赤ちゃんが目覚めたmlkshkオオカミビターズライブエッジブルーボトル、コールドプレスされたものは何でもハンモックフリーガン銅マグです。 `,
    },
    {
        id: 2,
        title: "ダイナーダブル",
        category: "ランチ",
        price: 1500,
        img: "./images/item-2.jpeg",
        desc: `ベーパーウェアiPhoneマンブルコアセルヴィッチ生デニムスローカーブレギンスコチュジャンヘルベティカマンブレイドジャンビン。 マーファサンダーキャッツ。`,
    },
    {
        id: 3,
        title: "ゴジラミルクセーキ",
        category: "デザート",
        price: 800,
        img: "./images/item-3.jpeg",
        desc: `紅茶キノコチルウェイブファニーパック3ウルフムーンストリートアートフォトブース。オーガニックバイラルが完売する前。`,
    },
    {
        id: 4,
        title: "国の喜び",
        category: "モーニング",
        price: 2200,
        img: "./images/item-4.jpeg",
        desc: `ぼろぼろのシックなクーフィーヤニュートラスナックウェーブポークベリーショアディッチ。 プリズムオースティントリュフォー。`,
    },
    {
        id: 5,
        title: "卵の攻撃",
        category: "ランチ",
        price: 2400,
        img: "./images/item-5.jpeg",
        desc: `フランツェンビーガンパブスト自転車の権利キックスターターピンテレスト瞑想農場から食卓までの90年代のポップアップ。
        `,
    },
    {
        id: 6,
        title: "オレオドリーム",
        category: "デザート",
        price: 2000,
        img: "./images/item-6.jpeg",
        desc: `ポートランドチチャロン倫理的なエジソン電球、パロサントクラフトビールチア家宝iPhone毎日`,
    },
    {
        id: 7,
        title: "ベーコンオーバーフロー",
        category: "モーニング",
        price: 1000,
        img: "./images/item-7.jpeg",
        desc: ` ジャンビンノームコアフリーガンを運ぶ。 ウイルスシングルオリジンコーヒーライブエッジ、豚バラ肉雲パンアイスランドは鳥を置きます`,
    },
    {
        id: 8,
        title: "アメリカンクラシック",
        category: "ランチ",
        price: 1500,
        img: "./images/item-8.jpeg",
        desc: `その上でキックスターターサンダーキャッツミガスは毎日イカパロサントレギンスを運びます。 フードトラックのトリュフォー `,
    },
    {
        id: 9,
        title: "検疫バディ",
        category: "デザート",
        price: 1800,
        img: "./images/item-9.jpeg",
        desc: `スケートボードのファムシンセ本物の記号論。 ライブエッジのlyftaf、エジソンバルブyuccie十字架のマイクロドージング。`,
    },
    {
        id: 10,
        title: "",
        category: "ディナー",
        price: 2500,
        img: "./images/item-10.jpeg",
        desc: `スケートボードのファムシンセ本物の記号論。 ライブエッジのlyftaf、エジソンバルブyuccie十字架のマイクロドージング。
        `,
    },
];

//

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')


//load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});
//filter items




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);
        return `<article class="menu-item">
<img src="${item.img}" class="photo" alt="${item.title}">
<div class="item-info">
    <header>
        <h4>${item.title}</h4>
        <h4 class="price">¥${item.price}</h4>
    </header>
    <p class="item-text">${item.desc}</p>
</div>
</article>`;

    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;

    }, ['全て']);
    const categoryBtns = categories.map((category) => {
        return `<button class = "filter-btn"
        type = "button"
        data-id =${category} >${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === '全て') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);// (category === '全て') ? displayMenuItems(menu) : displayMenuItems(menuCategory);
            }
        });
    });
}