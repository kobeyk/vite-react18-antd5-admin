export default class GeneralUtils {
  /**
   * 将函数做防抖处理,一般用于输入框 内容变动立即请求后端更新数据
   */
  static debounce(fn: Function, times: number) {
    let timer: NodeJS.Timeout;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arguments);
      }, times);
    };
  }

  /**
   * 判断对象是否为空
   */
  static isEmpty = (obj: any) => {
    if (typeof obj === "undefined" || obj === null) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * 清洗对象中的空属性
   */
  static cleanoutData = (obj: any) => {
    /* 删除空值 */
    Object.keys(obj).forEach((key) => {
      if (this.isEmpty(obj[key])) {
        delete obj[key];
      }
    });
    return obj;
  };

  /**
   * 获取路由search参数，如 xxxxx?name=aaaaaa
   */
  static getSearchParamValue = (search: string, propertyKey: string) => {
    let searchObj = new URLSearchParams(search);
    return searchObj ? searchObj.get(propertyKey) : null;
  }

  /** 对象转formdata */
  static toFormData = (data:any) => {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  }

}
