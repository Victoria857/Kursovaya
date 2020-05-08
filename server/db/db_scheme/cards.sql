CREATE TABLE card
(
    id SERIAL PRIMARY KEY,
    card_number bigint NOT NULL,
    card_cvv integer NOT NULL,
    card_owner character varying(255) NOT NULL,
    card_cash numeric(8,2) NOT NULL,
    user_owner_id integer REFERENCES "user"(id)
);


CREATE UNIQUE INDEX card_pkey ON card(id
int4_ops);

-- create table shoes_size
-- (
--     size_id int primary key,
--     european_size int,
--     american_size int
-- );
-- alter table shoes add foreign key (size) references shoes_size(size_id);