(function() {

  var root = this;

  	// 保存 HanConsole 被覆盖之前的值
	var oldSelf = root.HanConsole;

  var HanConsole = function(obj) {
		if (obj instanceof HanConsole) return obj;
		if (!(this instanceof HanConsole)) return new HanConsole(obj);
		// 将 obj 对象存到 new HanConsole() 而形成的构造对象的 _wrapped 属性中
		this._wrapped = obj;
  };

  if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = HanConsole;
		}
		exports.HanConsole = HanConsole;
	} else {
		root.HanConsole = HanConsole;
  }

  const COLORS = {
    info: '#1890FF',
    success: '#52c41a',
    warn: '#faad14',
    error: '#f5222d',
    white: '#fff',
  }

  const FONTS = {
    small: '12px',
    base: '14px',
    middle: '18px',
    large: '22px',
  }

  function theme (status) {
    const tmp = {
      head: `color: ${COLORS.white};background: ${COLORS[status]}`,
      body: `margin-left: 10px;color: ${COLORS[status]};font-size: ${FONTS.base};border-bottom: 0.5px solid ${COLORS[status]}`
    }

    return tmp;
  }

  HanConsole.success = function(arg) {
    const skins = theme('success');
    console.log(`%c success %c${arg}`, skins.head, skins.body);
  }

  HanConsole.info = function(arg) {
    const skins = theme('info');
    console.log(`%c info %c ${arg}`, skins.head, skins.body);
  }

  HanConsole.warn = function(arg) {
    const skins = theme('warn');
    console.log(`%c warn %c ${arg}`, skins.head, skins.body);
  }

  HanConsole.error = function(arg) {
    const skins = theme('error');
    console.log(`%c error %c ${arg}`, skins.head, skins.body);
  }


}).call(this);
