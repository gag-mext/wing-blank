import '../style';
const React =require( 'react');
const classNames =require( 'classnames');
class WingBlank extends React.Component{
  render() {
    const { prefixCls, size, className, children, style } = this.props;
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: true,
      [className]: !!className,
    });

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
WingBlank.defaultProps = {
  prefixCls: 'am-wingblank',
  size: 'lg',
};
WingBlank.propTypes = {
size:React.PropTypes.oneOf(['sm','md','lg']),
/** web only */
prefixCls: React.PropTypes.string,
/** web only */
className:React.PropTypes.string,
};
WingBlank.displayName = "WingBlank";
module.exports=WingBlank;
