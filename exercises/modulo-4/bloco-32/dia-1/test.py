print("Hello World")

# Estruturas condicionais

from random import randint

salary = randint(2000, 10000)  # (teste randomico)


position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"
""" ================================================================================= """

# Estruturas de repetição

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
# ou
min_rating = 3.0
filtered_restaurants = [
    restaurant["name"]  # aqui pedimos somente o nome do restaurante
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
# iteração de numeros em um range
for index in range(5):
    print(index)
    #
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
""" ================================================================================= """
# exercicio 13:
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result
""" ================================================================================= """
# Exercício 14:
ratings = [6, 8, 5, 9, 10]
ratingsX10 = []
for rating in ratings:
    ratingsX10.append(rating * 10)
ratingsX10
print(ratingsX10)
# Ou
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings
""" ================================================================================= """
# Exercício 15:
ratings2 = [6, 8, 5, 9, 10]
for rating2 in ratings2:
    if (rating2 % 3) == 0:
        print(rating2)
""" ================================================================================= """
# Funções:


def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string

    concat("Carlos", "João")
    concat("Carlos", "João", "Maria")
    dict(nome="Felipe", sobrenome="Silva", idade=25)
    dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)


""" ================================================================================= """
lista_frutas = ["banana", "uva", "maça", "pera"]

for fruta in lista_frutas:
    print(fruta[3])
