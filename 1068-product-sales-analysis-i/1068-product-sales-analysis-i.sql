-- Write your PostgreSQL query statement below
SELECT product_name,year,price FROM sales INNER JOIN Product USING (product_id);