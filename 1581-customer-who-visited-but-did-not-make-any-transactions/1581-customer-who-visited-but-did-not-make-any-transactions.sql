-- Write your PostgreSQL query statement below
SELECT customer_id,COUNT(visit_id) AS count_no_trans FROM visits WHERE visit_id NOT IN (SELECT DISTINCT visit_id FROM Transactions) GROUP BY customer_id;