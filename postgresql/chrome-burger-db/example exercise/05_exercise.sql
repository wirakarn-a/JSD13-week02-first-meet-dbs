-- Write query to find all the ingredients supplied by 'Patty' 's premium meats'
select ingredients.name
from ingredients
join suppliers on ingredients.supplier_id = suppliers.supplier_id
where suppliers.name = 'Patty''s premium meats';