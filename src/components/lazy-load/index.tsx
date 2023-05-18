import { Suspense, ReactNode, LazyExoticComponent } from 'react'
import { Spin } from 'antd'
const lazyLoad = (Comp: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      }
    >
      <Comp />
    </Suspense>
  )
}

export default lazyLoad;
