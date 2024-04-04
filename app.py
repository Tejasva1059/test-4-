# FullStack Development done by UMANG GOSWAMI (22100BTCSAII11062) github.com/goswamiumang108


from flask import *
from webbrowser import open as open_url

NotesNinja = Flask(__name__)


@NotesNinja.route('/')
def index():
    open_url(url="https://goswamiumang108.github.io/NotesNinja/", new=-1)
    return "Redirecting to the WebApp... https://goswamiumang108.github.io/NotesNinja/"


if __name__ == '__main__':
    NotesNinja.run(debug=True)
