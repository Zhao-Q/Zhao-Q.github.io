(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{499:function(e,s,a){"use strict";a.r(s);var l=a(45),t=Object(l.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"centos7-firewall-cmd-防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7-firewall-cmd-防火墙"}},[e._v("#")]),e._v(" CentOS7 firewall-cmd 防火墙")]),e._v(" "),a("p",[e._v("Centos6 使用的是 iptables，Centos7 使用的是 filewall（-cmd）")]),e._v(" "),a("p",[e._v("iptables 用于过滤数据包，属于网络层防火墙。")]),e._v(" "),a("p",[e._v("firewall 能够允许哪些服务可用，那些端口可用...属于更高一层的防火墙。")]),e._v(" "),a("h2",{attrs:{id:"_1-firewalld-的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-firewalld-的基本使用"}},[e._v("#")]),e._v(" 1.firewalld 的基本使用")]),e._v(" "),a("p",[e._v("启动： "),a("code",[e._v("systemctl start firewalld")])]),e._v(" "),a("p",[e._v("查看状态："),a("code",[e._v("systemctl status firewalld")])]),e._v(" "),a("p",[e._v("停止： "),a("code",[e._v("systemctl disable firewalld")])]),e._v(" "),a("p",[e._v("禁用： "),a("code",[e._v("systemctl stop firewalld")])]),e._v(" "),a("p",[e._v("在开机时启用一个服务："),a("code",[e._v("systemctl enable firewalld.service")])]),e._v(" "),a("p",[e._v("在开机时禁用一个服务："),a("code",[e._v("systemctl disable firewalld.service")])]),e._v(" "),a("p",[e._v("查看服务是否开机启动："),a("code",[e._v("systemctl is-enabled firewalld.service")])]),e._v(" "),a("p",[e._v("查看已启动的服务列表："),a("code",[e._v("systemctl list-unit-files|grep enabled")])]),e._v(" "),a("p",[e._v("查看启动失败的服务列表："),a("code",[e._v("systemctl --failed")])]),e._v(" "),a("h2",{attrs:{id:"_2-配置-firewalld-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-firewalld-cmd"}},[e._v("#")]),e._v(" 2.配置 firewalld-cmd")]),e._v(" "),a("p",[e._v("查看版本： "),a("code",[e._v("firewall-cmd --version")])]),e._v(" "),a("p",[e._v("查看帮助： "),a("code",[e._v("firewall-cmd --help")])]),e._v(" "),a("p",[e._v("显示状态： "),a("code",[e._v("firewall-cmd --state")])]),e._v(" "),a("p",[e._v("查看防火墙规则： "),a("code",[e._v("firewall-cmd --list-all")])]),e._v(" "),a("p",[e._v("查看所有打开的端口： "),a("code",[e._v("firewall-cmd --zone=public --list-ports")])]),e._v(" "),a("p",[e._v("更新防火墙规则： "),a("code",[e._v("firewall-cmd --reload")])]),e._v(" "),a("p",[e._v("查看区域信息: "),a("code",[e._v("firewall-cmd --get-active-zones")])]),e._v(" "),a("p",[e._v("查看指定接口所属区域： "),a("code",[e._v("firewall-cmd --get-zone-of-interface=eth0")])]),e._v(" "),a("p",[e._v("拒绝所有包："),a("code",[e._v("firewall-cmd --panic-on")])]),e._v(" "),a("p",[e._v("取消拒绝状态： "),a("code",[e._v("firewall-cmd --panic-off")])]),e._v(" "),a("p",[e._v("查看是否拒绝： "),a("code",[e._v("firewall-cmd --query-panic")])]),e._v(" "),a("h2",{attrs:{id:"_3-通过-firewall-cmd-开放端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过-firewall-cmd-开放端口"}},[e._v("#")]),e._v(" 3.通过 firewall-cmd 开放端口")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("firewall-cmd --zone=public --add-port=80/tcp --permanent #作用域是 public，开放 tcp 协议的 80 端口，一直有效\n\nfirewall-cmd --zone=public --add-port=80-90/tcp --permanent #作用域是 public，批量开放 tcp 协议的 80-90 端口，一直有效\n\nfirewall-cmd --zone=public --add-port=80/tcp --add-port=90/tcp --permanent #作用域是 public，批量开放 tcp 协议的 80、90 端口，一直有效\n\nfirewall-cmd --zone=public --add-service=http --permanent #开放的服务是 http 协议，一直有效\n\nfirewall-cmd --reload # 重新载入，更新防火墙规则，这样才生效。通过 systemctl restart firewall 也可以达到\n\nfirewall-cmd --zone= public --query-port=80/tcp #查看 tcp 协议的 80 端口是否生效\n\nfirewall-cmd --zone= public --remove-port=80/tcp --permanent # 删除\n\nfirewall-cmd --list-services\n\nfirewall-cmd --get-services\n\nfirewall-cmd --add-service=<service>\n\nfirewall-cmd --delete-service=<service>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("p",[e._v("在每次修改端口和服务后/etc/firewalld/zones/public.xml 文件就会被修改,所以也可以在文件中之间修改,然后重新加载")]),e._v(" "),a("p",[e._v("使用命令实际也是在修改文件，需要重新加载才能生效。")]),e._v(" "),a("h2",{attrs:{id:"_4-使用备忘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用备忘"}},[e._v("#")]),e._v(" 4.使用备忘")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('firewall-cmd --permanent --zone=public --add-rich-rule=\'rule family="ipv4" source address="192.168.0.4/24" service name="http" accept\' //设置某个 ip 访问某个服务\n\nfirewall-cmd --permanent --zone=public --remove-rich-rule=\'rule family="ipv4" source address="192.168.0.4/24" service name="http" accept\' //删除配置\n\nfirewall-cmd --permanent --add-rich-rule \'rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept\' //设置某个 ip 访问某个端口\n\nfirewall-cmd --permanent --remove-rich-rule \'rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept\' //删除配置\n\nfirewall-cmd --query-masquerade # 检查是否允许伪装 IP\n\nfirewall-cmd --add-masquerade # 允许防火墙伪装 IP\n\nfirewall-cmd --remove-masquerade # 禁止防火墙伪装 IP\n\nfirewall-cmd --add-forward-port=port=80:proto=tcp:toport=8080 # 将 80 端口的流量转发至 8080\n\nfirewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.1.0.1 # 将 80 端口的流量转发至 192.168.0.1\n\nfirewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.0.1:toport=8080 # 将 80 端口的流量转发至 192.168.0.1 的 8080 端口\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h2",{attrs:{id:"centos7-以前命令备忘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7-以前命令备忘"}},[e._v("#")]),e._v(" Centos7 以前命令备忘")]),e._v(" "),a("ul",[a("li",[e._v("1.开放 80，22，8080 端口")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT\n\n/sbin/iptables -I INPUT -p tcp --dport 22 -j ACCEPT\n\n/sbin/iptables -I INPUT -p tcp --dport 8080 -j ACCEPT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[e._v("2.保存")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/etc/rc.d/init.d/iptables save\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("3.查看打开的端口")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/etc/init.d/iptables status\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[e._v("4.关闭防火墙")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1） 永久性生效，重启后不会复原")]),e._v(" "),a("p",[e._v("开启： "),a("code",[e._v("chkconfig iptables on")])]),e._v(" "),a("p",[e._v("关闭： "),a("code",[e._v("chkconfig iptables off")])])]),e._v(" "),a("li",[a("p",[e._v("2） 即时生效，重启后复原")]),e._v(" "),a("p",[e._v("开启： "),a("code",[e._v("service iptables start")])]),e._v(" "),a("p",[e._v("关闭： "),a("code",[e._v("service iptables stop")])])])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);