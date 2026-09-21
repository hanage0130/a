import random

with open('/usr/share/dict/words', 'r') as f:
    words = [line.strip() for line in f]

random_words = random.choices(words, k=1000)
print('\n'.join(random_words))