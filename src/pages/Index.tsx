import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: 1,
    name: "Чайник «Вечер»",
    description: "Глиняный чайник ручной лепки, объём 400 мл",
    price: "3 800 ₽",
    image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/1a4a0c68-6a1a-4a58-963e-a12052f0b018.jpg",
    tag: "Хит",
  },
  {
    id: 2,
    name: "Набор «Церемония»",
    description: "Чайник + 4 пиалы, обожжённая керамика",
    price: "8 500 ₽",
    image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/4477f7f3-766d-4909-8a9f-c713495c3daf.jpg",
    tag: "Набор",
  },
  {
    id: 3,
    name: "Пиалы «Утро»",
    description: "Комплект из 4 чашек, матовая глазурь",
    price: "2 400 ₽",
    image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/107c881d-bbda-4f2b-b120-a9d0799a8635.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "Чаша «Тишина»",
    description: "Чаша для чайной медитации, 200 мл",
    price: "1 900 ₽",
    image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/f6000242-e485-494f-84da-942256a55bc1.jpg",
    tag: "Новинка",
  },
];

const NAV_ITEMS = ["Главная", "Товары", "О нас", "Контакты"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Главная");
  const [cartCount, setCartCount] = useState(0);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleOrder = (id: number) => {
    setCartCount((c) => c + 1);
    setAddedIds((prev) => [...prev, id]);
    setTimeout(() => setAddedIds((prev) => prev.filter((x) => x !== id)), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="text-accent">
              <Icon name="Coffee" size={20} />
            </div>
            <span className="font-cormorant text-xl font-semibold tracking-wide">
              Чайная церемония
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`font-golos text-sm tracking-wider transition-colors duration-200 relative pb-0.5 ${
                  activeNav === item
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors">
              <Icon name="ShoppingBag" size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-golos">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => { setActiveNav(item); setMenuOpen(false); }}
                className="text-left font-golos text-sm tracking-wider text-foreground py-1"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b5a08a' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-24">
          <div className="space-y-8">
            <div className="animate-fade-up delay-100">
              <span className="font-golos text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Мастерская керамики
              </span>
            </div>
            <h1 className="font-cormorant text-6xl md:text-7xl font-light leading-[1.05] animate-fade-up delay-200">
              Чайная<br />
              <em className="not-italic font-normal" style={{ color: 'hsl(var(--accent))' }}>церемония</em>
            </h1>
            <p className="font-golos text-base text-muted-foreground leading-relaxed max-w-sm animate-fade-up delay-300">
              Посуда ручной работы для настоящих ценителей чая. Каждое изделие — уникальный предмет, созданный с вниманием к форме и материалу.
            </p>
            <div className="flex items-center gap-4 animate-fade-up delay-400">
              <button
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground font-golos text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Смотреть каталог
              </button>
              <button className="font-golos text-sm text-muted-foreground tracking-wider hover:text-foreground transition-colors flex items-center gap-2">
                О мастерской <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in delay-400">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/4477f7f3-766d-4909-8a9f-c713495c3daf.jpg"
                alt="Чайный набор"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border border-border px-5 py-4 shadow-sm">
              <p className="font-cormorant text-2xl font-light">120+</p>
              <p className="font-golos text-xs text-muted-foreground tracking-wider">изделий в работе</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* CATALOG */}
      <section id="catalog" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="font-golos text-xs tracking-[0.25em] uppercase text-muted-foreground block mb-3">
              Коллекция
            </span>
            <h2 className="font-cormorant text-5xl font-light">Наши изделия</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-golos text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider">
            Все товары <Icon name="ArrowRight" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="group animate-fade-up"
              style={{ animationDelay: `${i * 0.1 + 0.2}s`, opacity: 0 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-background font-golos text-xs tracking-widest uppercase px-2.5 py-1 text-foreground">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleOrder(product.id)}
                    className="w-full bg-background text-foreground font-golos text-xs tracking-widest uppercase py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {addedIds.includes(product.id) ? "Добавлено ✓" : "В корзину"}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-cormorant text-xl font-medium">{product.name}</h3>
                <p className="font-golos text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-golos text-sm font-medium">{product.price}</span>
                  <button
                    onClick={() => handleOrder(product.id)}
                    className="font-golos text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
                  >
                    {addedIds.includes(product.id) ? "Добавлено ✓" : "Заказать"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: "HandMetal", title: "Ручная работа", desc: "Каждое изделие создаётся вручную. Никакой промышленной штамповки." },
            { icon: "Flame", title: "Обжиг в печи", desc: "Традиционный обжиг придаёт уникальную текстуру и долговечность." },
            { icon: "Package", title: "Бережная упаковка", desc: "Отправляем по России. Каждый предмет упакован с заботой." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center text-accent">
                <Icon name={item.icon as "HandMetal" | "Flame" | "Package"} size={18} fallback="Star" />
              </div>
              <h3 className="font-cormorant text-2xl font-light">{item.title}</h3>
              <p className="font-golos text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <span className="font-golos text-xs tracking-[0.25em] uppercase text-muted-foreground block mb-3">
            Люди
          </span>
          <h2 className="font-cormorant text-5xl font-light">Наша команда</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Елена Ван",
              role: "Мастер-керамист",
              detail: "Стаж 15 лет",
              image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/68fc3dc1-84e8-480d-9496-7aa191320275.jpg",
            },
            {
              name: "Дмитрий Сучков",
              role: "Дизайнер посуды",
              detail: "Более 50 коллекций",
              image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/117c5786-0a08-4b14-af04-0e6810a4cab9.jpg",
            },
            {
              name: "Ольга Чайкина",
              role: "Чайный сомелье",
              detail: "Проводит дегустации",
              image: "https://cdn.poehali.dev/projects/26049804-e060-4eee-8e42-49077f85a04d/files/7a81e14d-f9db-47e8-8335-48b2151e89eb.jpg",
            },
          ].map((person, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-card mb-5">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-medium mb-1">{person.name}</h3>
              <p className="font-golos text-sm text-foreground tracking-wide">{person.role}</p>
              <p className="font-golos text-xs text-muted-foreground mt-1">{person.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-cormorant text-4xl font-light mb-3">Индивидуальный заказ</h2>
            <p className="font-golos text-sm opacity-70 max-w-md leading-relaxed">
              Создадим изделие по вашим пожеланиям — форма, глазурь, объём. Срок изготовления от 2 недель.
            </p>
          </div>
          <button className="shrink-0 border border-primary-foreground font-golos text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
            Обсудить заказ
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="text-accent">
              <Icon name="Coffee" size={18} />
            </div>
            <span className="font-cormorant text-lg font-semibold tracking-wide">Чайная церемония</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item} className="font-golos text-xs text-muted-foreground tracking-wider hover:text-foreground transition-colors">
                {item}
              </button>
            ))}
          </nav>
          <p className="font-golos text-xs text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}