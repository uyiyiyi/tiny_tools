https://uyiyiyi.github.io/tiny_tools/

# tiny_tools
There're some tiny tools that I often use in works.

笔记：

旋转矩阵R的第一列 = 旧坐标系的x轴在新坐标系下的3个分量

旋转矩阵R的第二列 = 旧坐标系的y轴在新坐标系下的3个分量

旋转矩阵R的第三列 = 旧坐标系的z轴在新坐标系下的3个分量

R * 旧坐标系下向量（列向量形式） = 新坐标系下向量（列向量形式）

R^T * 新坐标系下向量（列向量形式） = 旧坐标系下向量（列向量形式）



绕固定坐标轴旋转:

先将B绕A的X轴旋转α再将B绕A的Y轴旋转β,最后将B绕A的Z轴旋转γ.旋转过程中坐标系A是不动的,其三个坐标轴也是固定的,因此称这种旋转方法为绕固定轴旋转.注意这里的旋转方向为先X轴,再Y轴,最后Z轴.

绕自身坐标轴旋转:

先将B绕B的Z轴旋转γ,再将B绕B的Y轴旋转β,最后将B绕B的X轴旋转α.旋转过程中坐标系B是变化的,其三个坐标轴也是变化的,称这种旋转方法为绕固自身旋转.注意这里的旋转方向为先Z轴,再Y轴,最后X轴.和第一种旋转方式的旋转顺序不同,原因是后面要给出的结论.

结论:

以绕固定轴方式,先X轴转α,再Y轴转β,最后Z轴转γ的旋转和以绕自身轴方式,先Z轴转γ,再Y轴转β,最后X轴转α的旋转是等效的.

