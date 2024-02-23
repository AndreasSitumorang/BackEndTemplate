-- Table: public.albums
-- DROP TABLE IF EXISTS public.albums;
CREATE TABLE IF NOT EXISTS public.albums (
    id integer NOT NULL DEFAULT nextval('albums_id_seq' :: regclass),
    title character varying(255) COLLATE pg_catalog."default",
    artist character varying(255) COLLATE pg_catalog."default",
    price numeric(10, 2),
    CONSTRAINT albums_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS public.albums OWNER to postgres;