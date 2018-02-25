install.packages("googlesheets")
library(googlesheets)
library(dplyr)
library(jsonlite)


data <- gs_title("olympijské medaile")

gs_ws_ls(data)

medailiste <- gs_read(data, "medailisté")

medailiste$vek <- medailiste$vek/100

categories <- medailiste %>%
  arrange(rok) %>%
  select(rok, misto) %>%
  distinct()

toJSON(paste(categories$rok, categories$misto))

medailiste <- medailiste %>%
  arrange(rok)

categories$i <- 0:16

medailiste <- medailiste %>%
  left_join(categories)

medailiste$random <- runif(nrow(medailiste),-0.25,0.25)

toJSON(medailiste %>%
         filter(medaile=="zlato") %>%
         mutate(x=i+random) %>%
         select(x,y=vek,j=jmeno,d=disciplina,p=pohlavi))

toJSON(medailiste %>%
         filter(medaile=="stříbro") %>%
         mutate(x=i+random) %>%
         select(x,y=vek,j=jmeno,d=disciplina,p=pohlavi))

toJSON(medailiste %>%
         filter(medaile=="bronz") %>%
         mutate(x=i+random) %>%
         select(x,y=vek,j=jmeno,d=disciplina,p=pohlavi))

categories2 <- c("1924 Chamonix","1928 Svatý Mořic","1932 Lake Placid","1936 Garmisch-Partenkirchen","1948 Svatý Mořic","1952 Oslo","1956 Cortina d'Ampezzo","1960 Squaw Valley","1964 Innsbruck","1968 Grenoble","1972 Sapporo","1976 Innsbruck","1980 Lake Placid","1984 Sarajevo","1988 Calgary","1992 Albertville","1994 Lillehammer","1998 Nagano","2002 Salt Lake City","2006 Turín","2010 Vancouver","2014 Soči","2018 Pchjongčchang")

medaile <- gs_read(data, "Kopie listu medaile")

medaile$y <- as.integer(!is.na(medaile$m))

medaile <- medaile %>%
  arrange(o,m,d)

medaile$i <- rep(1:8)

toJSON(medaile %>%
         left_join(data.frame(m=c("bronz","stříbro","zlato"), color=c("rgb(205,127,50)", "rgb(192,192,192)", "rgb(255, 215, 0)"))) %>%
         filter(i==1) %>%
         select(y,j,d,m,color))
