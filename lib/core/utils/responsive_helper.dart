import 'package:flutter/material.dart';

class ResponsiveHelper {
  static bool isMobile(BuildContext context) {
    final size = MediaQuery.of(context).size.width;
    return size < 768;
  }

  static bool isTablet(BuildContext context) {
    final size = MediaQuery.of(context).size.width;
    return size >= 768 && size < 1024;
  }

  static bool isDesktop(BuildContext context) {
    final size = MediaQuery.of(context).size.width;
    return size >= 1024;
  }

  static double getMobileWidth(BuildContext context) {
    final size = MediaQuery.of(context).size.width;
    if (size < 600) return size * 0.95;
    return 550;
  }

  static double getTabletWidth(BuildContext context) {
    final size = MediaQuery.of(context).size.width;
    return size * 0.85;
  }

  static double getDesktopWidth(BuildContext context) {
    return 1200;
  }

  static double getSidebarWidth(BuildContext context) {
    if (isMobile(context)) return 0;
    if (isTablet(context)) return 200;
    return 260;
  }

  static double getRightSidebarWidth(BuildContext context) {
    if (isMobile(context)) return 0;
    if (isTablet(context)) return 220;
    return 300;
  }

  static double getVerticalPadding(BuildContext context) {
    if (isMobile(context)) return 12;
    if (isTablet(context)) return 16;
    return 20;
  }

  static double getHorizontalPadding(BuildContext context) {
    if (isMobile(context)) return 16;
    if (isTablet(context)) return 24;
    return 32;
  }

  static double getAppBarHeight(BuildContext context) {
    if (isMobile(context)) return 56;
    return 64;
  }
}

class ResponsiveWidget extends StatelessWidget {
  final Widget? mobile;
  final Widget? tablet;
  final Widget? desktop;
  final Widget? mobileAndTablet;
  final Widget? tabletAndDesktop;
  final Widget? web;

  const ResponsiveWidget({
    super.key,
    this.mobile,
    this.tablet,
    this.desktop,
    this.mobileAndTablet,
    this.tabletAndDesktop,
    this.web,
  });

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    final isTablet = MediaQuery.of(context).size.width >= 768 && 
                     MediaQuery.of(context).size.width < 1024;
    final isDesktop = MediaQuery.of(context).size.width >= 1024;

    if (isDesktop && desktop != null) return desktop!;
    if (isTablet && tablet != null) return tablet!;
    if (isMobile && mobile != null) return mobile!;
    if (isMobile && mobileAndTablet != null) return mobileAndTablet!;
    if (isTablet && mobileAndTablet != null) return mobileAndTablet!;
    if (isTablet && tabletAndDesktop != null) return tabletAndDesktop!;
    if (isDesktop && tabletAndDesktop != null) return tabletAndDesktop!;

    return Container();
  }
}

class ResponsivePadding extends StatelessWidget {
  final EdgeInsets? mobile;
  final EdgeInsets? tablet;
  final EdgeInsets? desktop;
  final EdgeInsetsGeometry? all;

  const ResponsivePadding({
    super.key,
    this.mobile,
    this.tablet,
    this.desktop,
    this.all,
  });

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    final isTablet = MediaQuery.of(context).size.width >= 768 && 
                     MediaQuery.of(context).size.width < 1024;

    EdgeInsetsGeometry padding;
    if (all != null) {
      padding = all!;
    } else if (isMobile && mobile != null) {
      padding = mobile!;
    } else if (isTablet && tablet != null) {
      padding = tablet!;
    } else if (desktop != null) {
      padding = desktop!;
    } else {
      padding = EdgeInsets.all(16);
    }

    return Padding(padding: padding);
  }
}

class ResponsiveSizedBox extends StatelessWidget {
  final double? mobile;
  final double? tablet;
  final double? desktop;

  const ResponsiveSizedBox({
    super.key,
    this.mobile,
    this.tablet,
    this.desktop,
  });

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    final isTablet = MediaQuery.of(context).size.width >= 768 && 
                     MediaQuery.of(context).size.width < 1024;

    double height;
    if (isMobile && mobile != null) {
      height = mobile!;
    } else if (isTablet && tablet != null) {
      height = tablet!;
    } else if (desktop != null) {
      height = desktop!;
    } else {
      height = 16;
    }

    return SizedBox(height: height);
  }
}

class ResponsiveContainer extends StatelessWidget {
  final double? mobileWidth;
  final double? tabletWidth;
  final double? desktopWidth;
  final double? mobileHeight;
  final double? tabletHeight;
  final double? desktopHeight;
  final EdgeInsets? padding;
  final Decoration? decoration;
  final Widget? child;

  const ResponsiveContainer({
    super.key,
    this.mobileWidth,
    this.tabletWidth,
    this.desktopWidth,
    this.mobileHeight,
    this.tabletHeight,
    this.desktopHeight,
    this.padding,
    this.decoration,
    this.child,
  });

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 768;
    final isTablet = MediaQuery.of(context).size.width >= 768 && 
                     MediaQuery.of(context).size.width < 1024;

    double width;
    if (isMobile && mobileWidth != null) {
      width = mobileWidth!;
    } else if (isTablet && tabletWidth != null) {
      width = tabletWidth!;
    } else if (desktopWidth != null) {
      width = desktopWidth!;
    } else {
      width = double.infinity;
    }

    double? height;
    if (isMobile && mobileHeight != null) {
      height = mobileHeight!;
    } else if (isTablet && tabletHeight != null) {
      height = tabletHeight!;
    } else if (desktopHeight != null) {
      height = desktopHeight!;
    }

    return Container(
      width: width,
      height: height,
      padding: padding,
      decoration: decoration,
      child: child,
    );
  }
}
