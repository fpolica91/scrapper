from dataclasses import dataclass
import feedparser
import sys
import typing

@dataclass
class Scrapper:
  def get_keys(url: str) -> None:
    NewsFeed = feedparser.parse(url)
    entry = NewsFeed.entries[1]
    print(entry)
    sys.stdout.flush()







if __name__ == "__main__":
  scrapper = Scrapper
  scrapper.get_keys(sys.argv[1])








