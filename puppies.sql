-- Table: public.donations

-- DROP TABLE public.donations;

CREATE TABLE public.donations
(
    id bigint NOT NULL,
    amount double precision NOT NULL,
    created date NOT NULL,
    "giftId" bigint NOT NULL,
    "userId" bigint NOT NULL,
    karma bigint NOT NULL,
    CONSTRAINT donation_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.donations
    OWNER to objdftqtwsgsbt;

-- Table: public.gifts

-- DROP TABLE public.gifts;

CREATE TABLE public.gifts
(
    id bigint NOT NULL,
    title character varying(200) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    amount double precision NOT NULL,
    created date NOT NULL,
    modified date,
    "userId" bigint NOT NULL,
    karma bigint NOT NULL,
    CONSTRAINT gift_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.gifts
    OWNER to objdftqtwsgsbt;


-- Table: public.karmas

-- DROP TABLE public.karmas;

CREATE TABLE public.karmas
(
    id bigint NOT NULL,
    amount bigint NOT NULL,
    karmapoints bigint NOT NULL,
    CONSTRAINT karma_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.karmas
    OWNER to objdftqtwsgsbt;


INSERT INTO public.karma(id, amount, karmapoints) VALUES (1, -10000, -550);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (2, -9000, -500);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (3, -8000, -450);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (4, -7000, -400);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (5, -6000, -350);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (6, -5000, -300);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (7, -4000, -250);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (8, -3000, -200);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (9, -2000, -150);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (10, -1000, -100);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (11, -500, -50);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (12, -450, -45);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (13, -400, -40);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (14, -350, -35);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (15, -300, -30);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (16, -250, -25);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (17, -200, -20);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (18, -150, -15);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (19, -100, -10);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (20, -50, -5);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (21, 0, 0);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (22, 5, 2);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (23, 10, 4);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (24, 15, 6);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (25, 20, 8);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (26, 25, 10);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (27, 30, 12);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (28, 35, 14);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (29, 40, 16);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (30, 45, 18);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (31, 50, 20);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (32, 75, 24);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (33, 100, 28);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (34, 125, 32);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (35, 150, 36);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (36, 175, 40);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (37, 200, 44);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (38, 225, 48);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (39, 250, 52);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (40, 275, 56);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (41, 300, 60);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (42, 350, 68);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (43, 400, 76);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (44, 450, 84);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (45, 500, 90);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (46, 600, 98);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (47, 700, 106);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (48, 800, 114);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (49, 900, 122);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (50, 100, 130);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (51, 1500, 152);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (52, 2000, 164);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (53, 2500, 176);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (54, 3000, 188);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (55, 3500, 200);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (56, 4000, 212);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (57, 4500, 224);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (58, 5000, 236);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (59, 6000, 260);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (60, 7000, 284);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (61, 8000, 310);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (62, 9000, 334);
INSERT INTO public.karma(id, amount, karmapoints) VALUES (63, 10000, 358);


-- Table: public.status

-- DROP TABLE public.status;

CREATE TABLE public.status
(
    id bigint NOT NULL,
    value character varying(75) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT status_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.status
    OWNER to objdftqtwsgsbt;



INSERT INTO public.status(id, value) VALUES (1, 'new');
INSERT INTO public.status(id, value) VALUES (2, 'open');
INSERT INTO public.status(id, value) VALUES (3, 'finished');
INSERT INTO public.status(id, value) VALUES (4, 'closed');
INSERT INTO public.status(id, value) VALUES (5, 'deleted');

-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id bigint NOT NULL,
    firstname character varying(75) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(75) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(75) COLLATE pg_catalog."default" NOT NULL,
    email character varying(75) COLLATE pg_catalog."default" NOT NULL,
    username character varying(75) COLLATE pg_catalog."default" NOT NULL,
    authid character varying(75) COLLATE pg_catalog."default" NOT NULL,
    sessionid character varying(75) COLLATE pg_catalog."default" NOT NULL,
    statusId bigint NOT NULL,
    karma bigint NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to objdftqtwsgsbt;
