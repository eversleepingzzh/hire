
// 用户停止输入 500ms 后，再发送请求；
// 如果请求没有返回时，用户就再次输入，要取消之前的请求；
// 不能因为搜索而影响用户正常输入新的字符；
// 如果用户输入超过 30 个字符，取消所有请求，并显示提示：您输入的字符数过多。
class AutocompleteController {
  /**
   * 每次用户输入任意值，都会从 payload$ 流中获得
   * 比如，用户依次输入 a, b, c
   * 那么 payload$ 流会获得三个值："a", "ab", "abc"
   */
  payload$: Subject<string>;

  subscription: Subscription;

  constructor() {
    this.subscription = this.getAutoSearch().subscribe();
  }

  // 更新 Input 框中的搜索词
  setSearchStr: (str: string) => void;
  // 更新搜索状态
  setLoading: (isLoading: boolean) => void;
  // 显示或隐藏警告信息
  toggleWarning: (isShown?: boolean) => void;
  // 发送请求，获取搜索结果
  searchQuery: (str: string) => Observable<User[]>;
  // 更新搜索结果列表
  setSearchResults: (users: User[]) => void;

  // 你要实现的方法
  getAutoSearch() {
    const search$ = (
      /* ...你的代码... */
      this.payload$
        .do(e => setSearchStr(e);toggleWarning(e.length > 30 ? true: fasle))
        .decounce(500)
        .filter(e => e.length < 30)
        .do(setLoading(true))
        .switchMap(payload => this.searchQuery(payload))
        .do(setLoading(false))
        .do(setSearchResults(users))

    )

    return search$;
  }
}


ob.subscribe({
    next: d => console.log(d),
    error: err => console.error(err),
    complete: () => console.log('end of stream')
})

var text = document.querySelector('#text')
var inputStream = Rx.Observable.fromEvent(text, 'keyup')
                      .debounceTime(250)
                      .pluck('target', value)
                      .switchMap(url => Http.get(url))
                      .subscribe(data => render(data))


class IteratorFromArray {
    constructor(arr) {
        this._array = arr
        this._cursor = 0
    }

    next() {
        return
    }

    map(callback) {
        const iterator = new IteratorFromArray(this._array)
        return {
            next: () => {
                const { done, value } = iterator.next();
                    return {
                        done: done,
                        value: done ? undefined : callback(value)
                    }

            }
        }
    }
}

var Observable = Rx.Observable
                    .create(function(observer) {
                        observer.next('jerry');
                        observer.next('anna')
                    })

var source = Rx.Observable.of('jerry', 'Anna')

function map(source, callback) {
    return Rx.Observable.create()
}

var click = Rx.Observable. fromEvent(document.body, 'click')
var source = Rx.Observable.interval(1000)

const mouseDown = Rx.Observable.fromEvent(dragDom, 'mousedown')
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup')
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove')

const source = mouseDown.map(event => mouseMove.takUntil(mouseUp))
                        .concatAll()

source.map(m => {
    return {
        x: m.clientX,
        y: m.clientY
    }
})
.subscribe(pos => {

})


var source = Rx.Observable.interval(500).take(3)
var newest = Rx.Observable.interval(300).take(6)
