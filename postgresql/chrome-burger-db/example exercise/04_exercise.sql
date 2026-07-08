-- Write a query to find the three cheapest items available on the menu.
select name, price from menuitems
order by price
ASC limit 3;