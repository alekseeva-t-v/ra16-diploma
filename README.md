# Дипломный проект курса «React»

Дипломный проект курса [React для JS-разработчиков](https://netology.ru/programs/react)

## **Задача и описание реализации**

Дипломный проект представляет собой интернет-магазин обуви. Задача заключается в создании работающего приложения, всеми основными функциями которого можно пользоваться.

Бэкенд проекта находится по [ссылке](https://github.com/alekseeva-t-v/ra16-diploma-backend)

## **Содержание**

Приложение содержит следующие самостоятельные экраны (страницы):

* Главная страница.
* Каталог товаров.
* Информационная страница.
* Страница товара.
* Корзина.
* 404

## **Переходы между экранами**

Навигационным центром приложения являются шапка и футер каждого экрана (страницы):

![header](./public/images/header.jpg)

![footer](./public/images/footer.jpg)

Из шапки можно попасть на следующие экраны:

* ***логотип*** и ***ссылка «Главная»*** — ведут на главную страницу, URL — "/";
* ***«Kаталог»*** — ведёт на страницу каталога, URL — "/catalog.html";
* ***«О магазине»*** — ведёт на страницу «О магазине», URL — "/about.html";
* ***«Контакты»*** — ведёт на страницу «Контакты», URL — "/contacts.html".

Из футера можно попасть на следующие экраны:

* ***«О магазине»*** — ведёт на страницу «О магазине», URL — "/about.html";
* ***«Kаталог»*** — ведёт на страницу каталога, URL — "/catalog.html";
* ***«Контакты»*** — ведёт на страницу «Контакты», URL — "/contacts.html".

## **Описание экранов**

### **Главная страница**

Экран «Главная страница» доступен по умолчанию при открытии приложения.

После загрузки страница выглядит следующим образом:
![home](./public/images/home.png)

### **Каталог товаров**
Экран «Каталог товаров» выглядит следующим образом:
![catalog](./public/images/catalog.png)

Фактически он полностью повторяет функциональность каталога на главной странице, за одним исключением: у него есть поле поиска.

Если категория меняется, то данные перезагружаются с учётом строки поиска.

Строка поиска реагирует только на полный ввод, не live-поиск.

### **Поиск**
На всех страницах в шапке присутствует виджет поиска:
![search](./public/images/search-comments.png)

По умолчанию поисковое поле скрыто, отображается только иконка.
Эта иконка работает следующим образом: при первом клике открывает строку поиска, при втором, если был введён какой-то текст, то перенаправляет пользователя на страницу каталога (/catalog.html), при этом в поисковом поле должен быть отображён тот же текст, что был ввёден в строку поиска в шапке, и загрузка данных должна происходить исходя из этого:

![search](./public/images/search-catalog-comments.png)

Поиск на сервере работает по точному совпадению цвета без учёта регистра, например, «чёрный», и по содержанию слова для названия без учёта регистра, например, можно найти «жар» в «Туфли Жар-птицы».

Если пользователь не ввёл никакой текст, то строка поиска просто схлопывается обратно, как сейчас реализовано в html.

### **О магазине, контакты**
Это просто контентные страницы, в которые жёстко зашит контент. Никакой логики, кроме работы виджета поиска и ссылок, там нет.

![about](./public/images/about.jpg)

![contact](./public/images/contact.jpg)

### **Страница товара**
Страница товара выглядит следующим образом:
![catalog](./public/images/catalog-item.png)

### **Страница корзины**
В корзину можно попасть, либо заказав что-то, либо кликнув на иконку корзины в шапке сайта.

Корзина выглядит следующим образом:
![cart](./public/images/cart.jpg)

Блок «Корзина» отображает товары, находящиеся в корзине. Все товары хранятся локально в localStorage. Товар можно удалить из корзины, тогда он удалится и из localStorage тоже.

Одной позицией считается пара — товар + размер. То есть если купить те же босоножки другого размера, то это будет две позиции в корзине. А если два раза купить босоножки того же размера, то изменится количество и общая стоимость, но запись останется в табличке одна.

Общая сумма рассчитывается на базе суммирования всех позиций при отображении.

Соответственно, виджет корзинки отображает количество позиций в корзине:

![cart](./public/images/cart-icon.jpg)

Если в корзине товаров нет вообще, то розового индикатора с числом тоже нет.

После успешного оформления заказа все данные корзины вычищаются из state и из localStorage.

Пользователю отображается loader и сообщение об успехе.

### **404**
При вводе несуществующего URL, не соответствующего ни одному из путей, пользователю показывается страница 404.html.

![404](./public/images/404.jpg)

## **Стек технологий**

![HTML](./public/images/html.svg)
![CSS](./public/images/css.svg)
![JS](./public/images/js.svg)
![REACT](./public/images/react.svg)
![REDUX](./public/images/redux.svg)
![GIT](./public/images/git.svg)

## [**Демо**](https://ra16-diploma.vercel.app/)
![demo](./public/images/demo.jpg)