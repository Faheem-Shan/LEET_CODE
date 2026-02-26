-- Write your PostgreSQL query statement below
SELECT P.firstName,p.lastName,A.city,A.state FROM Person P LEFT JOIN Address A ON A.personId = P.personId