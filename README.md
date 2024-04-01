# Тестовое от VK

### Задача
Создать React-приложение для корзины товаров магазина на основе компонентов-функций.

### Требования
Макет из 2 колонок шириной 3:1 (применить дизайн-систему или flexbox/grid в css).

### Левая колонка
Вывод вертикального списка карточек товаров в корзине.

### Карточка товара:
Фото товара, название (под ним описание), количество, стоимость.

### Действия с товаром:
Изменить количество (кнопка с иконкой +/- и ограничением - минимум 1 товар, максимум 10).
Удалить (кнопка с иконкой корзины).

Для хранения состояния приложения желательно применять стейт-менеджер.
Применять можно любой из основных стейт-менеджеров: Redux, MobX, Effector.

### Правая колонка
Вывод текста "Итого: <сумма> руб." и итоговой суммы заказа по всем товарам, учитывая количества каждого товара в корзине.

### Данные
Изменение количества товара/удаление будет производиться локально в приложении (стейт-менеджере).

### Будет плюсом
Применение стейт-менеджера.
Запрос данных из API (можно и из файла, главное чтобы была асинхронная работа и работа с стейт-менеджером).
Применение TypeScript.
Применение css (flexbox/grid).