# FullStack Development done by UMANG GOSWAMI (22100BTCSAII11062) github.com/goswamiumang108


from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("/templates/index.html")


if __name__ == '__main__':
    app.run(debug=True)
