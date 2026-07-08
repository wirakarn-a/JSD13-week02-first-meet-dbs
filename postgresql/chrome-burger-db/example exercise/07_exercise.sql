-- Write a query to find out how many orders each staff member has processed. Show the staff member's first name, last name, and their total order count.
select 
s.first_name,
s.last_name,
count (o.order_id) as order_account
from staff s
join orders o on s.staff_id = o.staff_id
group by s.staff_id
order by order_count desc;