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

  