import feedparser
import sys


def get_keys():
  NewsFeed = feedparser.parse("https://timesofindia.indiatimes.com/rssfeedstopstories.cms")
  entry = NewsFeed.entries[1]
  print(entry)
  sys.stdout.flush()
  





if __name__ == "__main__":
  get_keys()








