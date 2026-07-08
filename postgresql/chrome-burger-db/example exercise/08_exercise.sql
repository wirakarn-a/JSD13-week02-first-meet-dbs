-- Write a query to calculate the total revenue for each day of sales.
select 
date(order_date) as sales_day,
sum(total_price) as daily_revenue
from orders
group by sales_day
order by sales_day; 